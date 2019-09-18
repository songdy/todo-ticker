import formatTime from '../../utils/formatTime'
Page({
    countdownList: [1000,2003,3005,4007,5009],
    data: {
        countdownListStr: []
    },
    tick (delta) {
        console.log('list tick')
        let countdownListStr = []
        this.countdownList.forEach((item, i) => {
            item -= delta
            countdownListStr.push(formatTime(this.countdownList[i] = item))
        });
        this.setData({
            countdownListStr
        })
    }
});
