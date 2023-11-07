
// ライブラリ
document.getElementByXPath = function(sValue) { var a = this.evaluate(sValue, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null); if (a.snapshotLength > 0) { return a.snapshotItem(0); } };

// main
// icon image is from <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by Freepik - Flaticon</a>
(function () {
    var title_element = document.getElementByXPath('/html/body/div[3]/div[9]/div[2]/main/div/div/div/div[2]/div[1]/div[2]/div');

    if(title_element === undefined){
        // pass
    }
    
    else{

        var title = title_element.textContent.trim();
        var sub_name = document.getElementByXPath('/html/body/div[3]/div[9]/div[2]/nav/div/span[1]/a/span').textContent.trim();

        // del '/'
        var date_val = document.getElementByXPath('/html/body/div[3]/div[9]/div[2]/main/div/div/div/div[2]/div[2]/div[2]/div').textContent.trim();
        date_val = date_val.replace(/\/|:/g,'').replace(' ','T');

        console.log(`http://www.google.com/calendar/event?action=TEMPLATE&text=${title}(${sub_name})&dates=${date_val}00/${date_val}00&ctz=Asia/Tokyo`);

        var url = `http://www.google.com/calendar/event?action=TEMPLATE&text=${title}(${sub_name})&dates=${date_val}00/${date_val}00&ctz=Asia/Tokyo`
        var btn = document.createElement("a");
        btn.innerHTML = "<span class=\"glyphicon glyphicon-calendar\"></span> カレンダーに追加";
        btn.className = "Mrphs-toolTitleNav__link";
        btn.setAttribute("href",url);
        btn.setAttribute("target","_blank");

        document.getElementByXPath('/html/body/div[3]/div[9]/div[2]/main/div/div/nav/div').appendChild(btn);

    }

})();