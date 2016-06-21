blackList = ["wake up", "smoke", "lnbs", "heat check", "guess that"]
for (story = 0; story < document.getElementsByClassName('bp-entry').length; story++) {
  for (word = 0; word < blackList.length; word++) {
    if (document.getElementsByClassName('bp-entry')[story].children[0].children[2].children[0].text.toLowerCase().indexOf(blackList[word]) > -1) {
      //Logic for greying out that stories picture here!!!;
      document.getElementsByClassName('bp-entry')[story].children[1].children[0].children[0].children[0].src="";
    }
  }
}