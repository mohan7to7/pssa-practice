var questionBank={};
function initQuestionBank(){
    // Support for original combined format (for backward compatibility)
    if(typeof gradeKQuestions!=='undefined' && gradeKQuestions.math)questionBank.K=gradeKQuestions;
    if(typeof grade1Questions!=='undefined' && grade1Questions.math)questionBank['1']=grade1Questions;
    if(typeof grade2Questions!=='undefined' && grade2Questions.math)questionBank['2']=grade2Questions;
    if(typeof grade3Questions!=='undefined' && grade3Questions.math)questionBank['3']=grade3Questions;
    if(typeof grade4Questions!=='undefined' && grade4Questions.math)questionBank['4']=grade4Questions;
    if(typeof grade5Questions!=='undefined' && grade5Questions.math)questionBank['5']=grade5Questions;

    // Support for new split format
    // Combine split subject files into the expected structure
    const grades = [
        {name: 'K', prefix: 'gradeK'},
        {name: '1', prefix: 'grade1'},
        {name: '2', prefix: 'grade2'},
        {name: '3', prefix: 'grade3'},
        {name: '4', prefix: 'grade4'},
        {name: '5', prefix: 'grade5'}
    ];

    const subjects = ['Math', 'Science', 'English', 'Social'];

    for(const grade of grades){
        // Check if we already loaded combined format
        if(questionBank[grade.name]) continue;

        const combined = {};
        for(const subject of subjects){
            const varName = grade.prefix + subject + 'Questions';
            if(typeof window !== 'undefined' && window[varName]){
                combined[subject.toLowerCase()] = window[varName];
            }
        }

        if(Object.keys(combined).length > 0){
            questionBank[grade.name] = combined;
        }
    }
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