var drones = []
var vipNum = 0
var droneIn = 1
const droneWarranty = () => {
  var myDate = new Date()
  var finishDate = new Date()
  var warranty = document.getElementById('warranty').value
  if (document.getElementById('vip').checked) {
    vipNum++
  }
  switch (warranty) {
    case 'regular':
      finishDate.setDate(finishDate.getDate() + 21)
      break
    case 'expanded':
      finishDate.setDate(finishDate.getDate() + 14)
      break
    case 'insurance':
      finishDate.setDate(finishDate.getDate() + 10)
      break
    case 'noWarranty':
      finishDate.setMonth(finishDate.getMonth() + 1)
      break
    case 'vip':
      finishDate.setDate(finishDate.getDate() + 7)
      break
  }
  var drone = new Object()
  drone.date = myDate.toLocaleDateString()
  drone.finishDate = finishDate.toLocaleDateString()
  if (warranty == 'noWarranty') {
    drone.daysLeft = Math.abs(myDate.getMonth() - finishDate.getMonth()) * 30
  } else {
    drone.daysLeft = Math.abs(myDate.getDate() - finishDate.getDate())
  }
  drone.name = document.getElementById('name').value
  drone.number = document.getElementById('phoneNumber').value
  drone.tipul = document.getElementById('tipul').value
  drones.push(drone)
  makeTable()
  document.getElementById('myForm').reset()
  droneIn++
}

const makeTable = () => {
  var data = ''
  drones.map((item) => {
    data += `
              <tr>
                  <td>${item.date}</td>
                  <td>${item.finishDate}</td>
                  <td>${item.daysLeft}</td>
                  <td>${item.name}</td>
                  <td>${item.number}</td> 
                  <td>${item.tipul}</td>                 
              </tr>
          `
  })
  document.getElementById('droneBody').innerHTML = data
  document.getElementById(
    'data',
  ).innerHTML = `VIPS: ${vipNum} Drones IN: ${droneIn}`
}
