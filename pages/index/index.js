import formatTime from '../../utils/formatTime'
Page({
    countdown: 1000,
    data: {
        countdownStr: ''
    },
    tick (delta) {
        console.log('index tick')
        let countdownStr = formatTime(this.countdown -= delta)
        this.setData({
            countdownStr
        })
    }
});
