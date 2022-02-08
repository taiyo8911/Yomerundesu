"use strict"

const shiftList = [
    "279", "275", "292", "292-", "特", "公", "297", "297-", "291", "291-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "282", "282-", "公", "295", "295-", "285", "285-", "特", "公", "278", "272", "287", "287-", "特", "予/公/特", "290", "290-", "281", "281-", "特", "公", "280", "274", "293", "293-", "特", "公", "288", "288-", "286", "286-", "特", "予/公/特", "294", "294-", "284", "284-", "特", "公",
    "279", "275", "292", "292-", "特", "公", "297", "297-", "291", "291-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "282", "282-", "公", "295", "295-", "285", "285-", "特", "公", "278", "272", "287", "287-", "特", "予/公/特", "290", "290-", "281", "281-", "特", "公", "280", "274", "293", "293-", "特", "公", "288", "288-", "286", "286-", "特", "予/公/特", "294", "294-", "284", "284-", "特", "公",
    "279", "275", "292", "292-", "特", "公", "297", "297-", "291", "291-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "282", "282-", "公", "295", "295-", "285", "285-", "特", "公", "278", "272", "287", "287-", "特", "予/公/特", "290", "290-", "281", "281-", "特", "公", "280", "274", "293", "293-", "特", "公", "288", "288-", "286", "286-", "特", "予/公/特", "294", "294-", "284", "284-", "特", "公",
    "279", "275", "292", "292-", "特", "公", "297", "297-", "291", "291-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "282", "282-", "公", "295", "295-", "285", "285-", "特", "公", "278", "272", "287", "287-", "特", "予/公/特", "290", "290-", "281", "281-", "特", "公", "280", "274", "293", "293-", "特", "公", "288", "288-", "286", "286-", "特", "予/公/特", "294", "294-", "284", "284-", "特", "公",
    "279", "275", "292", "292-", "特", "公", "297", "297-", "291", "291-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "282", "282-", "公", "295", "295-", "285", "285-", "特", "公", "278", "272", "287", "287-", "特", "予/公/特", "290", "290-", "281", "281-", "特", "公", "280", "274", "293", "293-", "特", "公", "288", "288-", "286", "286-", "特", "予/公/特", "294", "294-", "284", "284-", "特", "公",
    "279", "275", "292", "292-", "特", "公", "297", "297-", "291", "291-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "282", "282-", "公", "295", "295-", "285", "285-", "特", "公", "278", "272", "287", "287-", "特", "予/公/特", "290", "290-", "281", "281-", "特", "公", "280", "274", "293", "293-", "特", "公", "288", "288-", "286", "286-", "特", "予/公/特", "294", "294-", "284", "284-", "特", "公",
    "279", "275", "292", "292-", "特", "公", "297", "297-", "291", "291-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "282", "282-", "公", "295", "295-", "285", "285-", "特", "公", "278", "272", "287", "287-", "特", "予/公/特", "290", "290-", "281", "281-", "特", "公", "280", "274", "293", "293-", "特", "公", "288", "288-", "286", "286-", "特", "予/公/特", "294", "294-", "284", "284-", "特", "公",
    "279", "275", "292", "292-", "特", "公", "297", "297-", "291", "291-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "282", "282-", "公", "295", "295-", "285", "285-", "特", "公", "278", "272", "287", "287-", "特", "予/公/特", "290", "290-", "281", "281-", "特", "公", "280", "274", "293", "293-", "特", "公", "288", "288-", "286", "286-", "特", "予/公/特", "294", "294-", "284", "284-", "特", "公",
    "279", "275", "292", "292-", "特", "公", "297", "297-", "291", "291-", "特", "公", "276", "271", "283", "283-", "特", "予/公/特", "296", "296-", "289", "289-", "特", "公", "277", "273", "282", "282-", "公", "295", "295-", "285", "285-", "特", "公", "278", "272", "287", "287-", "特", "予/公/特", "290", "290-", "281", "281-", "特", "公", "280", "274", "293", "293-", "特", "公", "288", "288-", "286", "286-", "特", "予/公/特", "294", "294-", "284", "284-", "特", "公",
];

// 調べるボタンが押された時に計算
function search() {
    // 最近やった勤務とそれに対応するインデックスを取得
    var myWork = document.getElementById("work").value;
    var myIndex = shiftList.indexOf(myWork);

    // 調べたい日(futureDay)と過去の日(pastDay)の差を計算してdayGapに
    var futureDay = new Date(document.getElementById("find-day").value);
    var pastDay = new Date(document.getElementById("work-day").value);
    var dayGap = (futureDay - pastDay) / 86400000;

    // 出力用の年月日を用意
    var year = futureDay.getFullYear();
    var month = futureDay.getMonth() + 1;
    var day = futureDay.getDate()
    var dayOfWeek = futureDay.getDay();
    var dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];

    // 調べたい日のインデックスを計算する
    var index = myIndex + dayGap;

    // 表示する
    document.getElementById('day').textContent = `${year}年 ${month}月${day}日(${dayOfWeekStr})`;
    document.getElementById('result').textContent = `${shiftList[index]}`

}