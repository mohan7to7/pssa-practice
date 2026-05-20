var questionBank={};
function initQuestionBank(){
    if(typeof gradeKQuestions!=='undefined')questionBank.K=gradeKQuestions;
    if(typeof grade1Questions!=='undefined')questionBank['1']=grade1Questions;
    if(typeof grade2Questions!=='undefined')questionBank['2']=grade2Questions;
    if(typeof grade3Questions!=='undefined')questionBank['3']=grade3Questions;
    if(typeof grade4Questions!=='undefined')questionBank['4']=grade4Questions;
    if(typeof grade5Questions!=='undefined')questionBank['5']=grade5Questions;
}
function getQuestionsForLevel(grade,subject,level){
    try{
        const gradeData=questionBank[grade];
        if(!gradeData)return generatePlaceholderQuestions(grade,subject,level);
        const subjectData=gradeData[subject];
        if(!subjectData)return generatePlaceholderQuestions(grade,subject,level);
        const levelData=subjectData[level];
        if(!levelData||!Array.isArray(levelData))return generatePlaceholderQuestions(grade,subject,level);
        return levelData;
    }catch(e){return generatePlaceholderQuestions(grade,subject,level);}
}
function generatePlaceholderQuestions(grade,subject,level){
    const s=subject.charAt(0).toUpperCase()+subject.slice(1);
    return [{question:s+' Level '+level+' Q1',answers:[{text:'Option A',correct:true},{text:'Option B',correct:false},{text:'Option C',correct:false},{text:'Option D',correct:false}]},{question:s+' Level '+level+' Q2',answers:[{text:'Option A',correct:false},{text:'Option B',correct:true},{text:'Option C',correct:false},{text:'Option D',correct:false}]},{question:s+' Level '+level+' Q3',answers:[{text:'Option A',correct:false},{text:'Option B',correct:false},{text:'Option C',correct:true},{text:'Option D',correct:false}]},{question:s+' Level '+level+' Q4',answers:[{text:'Option A',correct:false},{text:'Option B',correct:false},{text:'Option C',correct:false},{text:'Option D',correct:true}]},{question:s+' Level '+level+' Q5',answers:[{text:'Option A',correct:true},{text:'Option B',correct:false},{text:'Option C',correct:false},{text:'Option D',correct:false}]}];
}
if(typeof document!=='undefined'){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initQuestionBank);}else{initQuestionBank();}}
if(typeof window!=='undefined'){window.questionBank=questionBank;window.getQuestionsForLevel=getQuestionsForLevel;window.generatePlaceholderQuestions=generatePlaceholderQuestions;window.initQuestionBank=initQuestionBank;}