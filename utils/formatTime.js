/**
 * 
 * @param {number} time 时间
 */

export default function formatTime (time = 0) {
    const m = formatDecimal(parseInt(time / 60, 10) % 60, 2)
    const s = formatDecimal(parseInt(time, 10) % 60, 2)
    return `${m}:${s}`
}
/**
 * 格式化十进制信息
 * @param {Number} time（必传）
 */
function formatDecimal (time) {
    if (time < 10) {
      return `0${time}`
    }
  
    return time
  }