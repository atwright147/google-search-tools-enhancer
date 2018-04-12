
const addElements = () => { 
    const timeMenuMonthItem = document.getElementById('qdr_m');
    const timeMenuMonthItemOuterHtml = timeMenuMonthItem.outerHTML;
    
    const timeMenuMonthItem3 = timeMenuMonthItemOuterHtml.replace('id="qdr_m"', 'id="qdr_m3"').replace('tbs=qdr:m', 'tbs=qdr:m3').replace('Past month', 'Past 3 months');
    const timeMenuMonthItem6 = timeMenuMonthItemOuterHtml.replace('id="qdr_m"', 'id="qdr_m6"').replace('tbs=qdr:m', 'tbs=qdr:m6').replace('Past month', 'Past 6 months');
    
    timeMenuMonthItem.after(document.createRange().createContextualFragment(timeMenuMonthItem6));
    timeMenuMonthItem.after(document.createRange().createContextualFragment(timeMenuMonthItem3));
};

setTimeout(addElements, 100);  // hacky but it'll do for now
