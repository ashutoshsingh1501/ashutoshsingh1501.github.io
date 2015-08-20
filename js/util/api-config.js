(function(res)
{
     var config  =  {
        "Nausea":"https://api.fda.gov/drug/event.json?api_key=KowT119SatMaG2xnA0b2Rv3YIiGqfpQkHrXcbz8g&limit=10&count=patient.reaction.reactionmeddrapt.exact",
        "adverseEffect":"https://api.fda.gov/drug/event.json?api_key=KowT119SatMaG2xnA0b2Rv3YIiGqfpQkHrXcbz8g&limit=10&count=patient.drug.medicinalproduct.exact&search=patient.reaction.reactionmeddrapt=NAUSEA",
        "Humira":"https://api.fda.gov/drug/event.json?api_key=KowT119SatMaG2xnA0b2Rv3YIiGqfpQkHrXcbz8g&count=patient.patientsex&search=%20(patient.reaction.reactionmeddrapt=NAUSEA)%20AND%20(patient.drug.medicinalproduct=HUMIRA)"
    };
    return res.apiConfig = config;
})(this)
