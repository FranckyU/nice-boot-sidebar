$ ->
  # happy coffee time !

  rounds = 0

  changeTextOf = (e, index) ->

    prefix =  if (rounds+index+1).toString().match(/.*1$/)
                "st"
              else if (rounds+index+1).toString().match(/.*2$/)
                "nd"
              else
                "th"

    e.html("Have a good time for the " + (rounds+index+1) + prefix + " time !")
    
    rounds += 1 if index%2 is 1  

  $("#lnk").click (e) ->
    changeTextOf $(elem), index for elem, index in $("h1")
  