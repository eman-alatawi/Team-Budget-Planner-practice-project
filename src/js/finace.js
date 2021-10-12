
const expenses = document.getElementById("expenses");
const tbody = document.getElementById("tbody");

// function editStatus(e,id){
//     teamsExpList.findIndex((item) => {
//         if(item.id === id){
//           if( e.target.value === 'approved')
//            console.log('selected approved')
//            else if ( e.target.value === 'denied'){
//             console.log('selected denied')
//            }

//         }
//     })
// }
var teamsExpList = JSON.parse(localStorage.getItem("teamsExpList"));
displayExp(teamsExpList);

function displayExp(teamsExpList) {
  tbody.innerHTML = null;
  for (i = 0; i < teamsExpList.length; i++) {
    tbody.innerHTML += `
        <tr>
        <td>${teamsExpList[i].teamName}</td>
        <td>${teamsExpList[i].projID}</td>
        <td>${teamsExpList[i].teamMembers}</td>
        <td>${teamsExpList[i].mngrID}</td>
        <td>${teamsExpList[i].expensesAmount}</td>
        <td>${teamsExpList[i].expensesDate}</td>
        <td><input  type="radio" name="status" value="approved" onclick="editStatus(${teamsExpList[i].id})">Approved</input> <br><input type="radio" name="status" value="denied" onclick="editStatus(${teamsExpList[i].id})">Denied</input> </td>
        </tr>
    `;
  }

  calcExpenses();
}

function calcExpenses() {
  let totalExp = 0;
  for (i = 0; i < teamsExpList.length; i++) {
    totalExp += Number(teamsExpList[i].expensesAmount);
  }

  expenses.innerText = totalExp;
}
