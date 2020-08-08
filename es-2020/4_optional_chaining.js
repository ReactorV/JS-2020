const bill1 = {
    bank: {
        amount: {
            value: 200,
            currency: 'USD'
        },
        name: 'Priorbank'
    }
};

const bill2 = {
    bank: {}
};

function getBillValue(bill) {
   /* return (bill && bill.bank && bill.bank.amount && bill.bank.amount.value)
        ? bill.bank.amount.value
        : false;*/

    return bill?.bank?.amount?.value
}

console.log(getBillValue(bill1));//200
console.log(getBillValue(bill2));//false

