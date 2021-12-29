#clear workspace
rm(list=ls())

library(RMySQL)
library(quickpsy)

#store all output in this variable
output <- integer(0)

#connect to MySQL database
db = dbConnect(MySQL(), user='root', password='', dbname='optimal', host='localhost')

#get list of participants from 'finished' table
finishedSQL = dbSendQuery(db, "select * from finish")
finishedData = fetch(finishedSQL)
participants = finishedData$id

#now loop over participants and analyse data
for (pnum in 1:length(participants)) {
  print(participants[pnum])
  
  #initialise outpue line with participant code
  output_line <- participants[pnum]
  
  #get experimental trials for this participant
  query = sprintf("select * from info where id=\'%s\'", participants[pnum])
  postTrialSQL = dbSendQuery(db, query)
  postTrial = fetch(postTrialSQL)
  
  
  #get accuracy on forced internal trials
  accInternal = mean(c(postTrial[1:1,]$TAccNR1,postTrial[1:1,]$TAccNR2,postTrial[1:1,]$TAccNR3,postTrial[1:1,]$TAccNR4,postTrial[1:1,]$TAccNR5))*10
  output_line = c(output_line, accInternal*10)
  
  #get accuracy on forced external trials
  accExternal = mean(c(postTrial[1:43]$TAccR1,postTrial[9:43]$TAccR2,postTrial[9:43]$TAccR3,postTrial[9:43]$TAccR4,postTrial[9:43]$TAccR5))*10
  output_line = c(output_line, accExternal*10)
  
  #calculate objective indifference point
  OIP = (10 * accInternal) / accExternal
  output_line = c(output_line, OIP)
  
  #get choices for 1-9 value trials
  choices <- c(postTrial[1:1,]$O1,postTrial[1:1,]$O2,postTrial[1:1,]$O3,postTrial[1:1,]$O4,postTrial[1:1,]$O5,postTrial[1:1,]$O6,postTrial[1:1,]$O7,postTrial[1:1,]$O8,postTrial[1:1,]$O9)
  
  #as things stand, choices are coded with 0 = reminder, 1 = own memory
  #let's flip that so that it's th other way around and there's a positive
  #relationship between value and choice. this is required for curve fitting
  choices <- (choices-1)^2
  
  output_line = c(output_line, t(choices))
  
  #now fit sigmoid function to choice data
  values = c(1,2,3,4,5,6,7,8,9)
  numbers = c(1,1,1,1,1,1,1,1,1)
  toFit = data.frame(values,choices,numbers)
  
  #fit the curve
  fit = quickpsy(toFit, values, choices, numbers, parini=list(c(1,9),c(1,500)))
  
  #plot fit
  p = plot(fit)
  print(p)
  
  #get actual indifference point
  AIP = fit$par$par[1]
  output_line = c(output_line, AIP)
  
  #calculate bias
  bias = OIP-AIP
  output_line = c(output_line, bias)

  #get slider data for this participant
  query = sprintf("select * from info where id=\'%s\'", participants[pnum])
  sliderSQL = dbSendQuery(db, query)
  sliders = fetch(sliderSQL)
  output_line = c(output_line, sliders$PreInternal, sliders$PreExternal)
  
  #save results to output variable
  output = rbind(output,t(output_line))
}

#disconnect from MySQL database
dbDisconnect(db)

#now convert output to data frame
results = as.data.frame(output)
colnames(results) = c("participant", "accInternal", "accExternal", "OIP", 
                      "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", 
                      "AIP", "bias", "predInternal", "predExternal")
save(results, file = "results.Rdata")
write.csv(results, file = "results.csv", row.names = TRUE)

