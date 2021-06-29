const btneth = document.querySelector('enbeth');
const btnact = document.querySelector('account');
const btnsnd = document.querySelector('sndbtn');
const btnbal = document.querySelector('shwbal');
const daival = document.getElementById('ether');
const daiadd = document.getElementById('add')

btneth.addEventListener("click", ()=>{
    getAccount();
});

async function getAccount() {
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    const account = accounts[0];
    btnact.innerHTML = account;

    const balance = await ethereum.request({method: 'eth_getBalance', params:[ account, 'latest'],});
    const read = parseInt(balance / (10 ** 18));
    btnbal.innerHTML = read.toFixed(3);

}

btnsnd.addEventListener('click', ()=>{

    ethereum.request({method: 'eth_sendTransaction', params:[{from: account, to:daiadd.val, value: daival.value, }],})
    .then((txhash) => console.log(txhash)).catch((error)=>console.error);

});


