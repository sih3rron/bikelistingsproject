function onPersonalizationResult(e){
    console.log("P13N: ", e)
}

function onTestResult(e){
    console.log("E13N: ", e)
}

function plugInit(context){
    console.log("INIT: ", context)
    context.events.on("personalizationResult", onPersonalizationResult);
    context.events.on("testResult", onTestResult);
}

export function genericEventsPlugin(){
    return {
        init: plugInit
    }
}