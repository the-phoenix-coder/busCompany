const firstName = document.querySelector('.first')
const lastName = document.querySelector('.last')
const from = document.querySelector('.form .from')
const to = document.querySelector('.form .to')
const date = document.querySelector('.form .date')
const select = document.querySelector('.form select')
const btn = document.querySelector('.form button')
const popUp = document.querySelector('.popUp')
const purchase = popUp.querySelector('.purchase')
const canceler = popUp.querySelector('.canceler')
let arr = []
function handleClick()
{
    const option = select.options[select.selectedIndex].value
    let price
    if (option === 'A1' || option === 'A2' || option === 'A3' || option === 'A4')
    {
        price = '$150'
    } else if (option === 'B1' || option === 'B2' || option === 'B3' || option === 'B4')
    {
        price = '$120'
    } else if (option === 'C1' || option === 'C2' || option === 'C3' || option === 'C4')
    {
        price = '$100'
    } else
    {
        price = '$70'
    }
    
    popUp.style.visibility = 'visible'
    document.querySelector('body').classList.add('vis')
    popUp.querySelector('.distenation').textContent = `From ${from.value} To ${to.value}`
    popUp.querySelector('.travelDate').textContent = `Date: ${date.value}`
    popUp.querySelector('.price').textContent =
        `Your Seat: ${option} || Price: ${price}`
    from.value = ''
    to.value = ''
    date.value = ''
}
function cancelerPurchase()
{
    popUp.style.visibility = 'hidden'
    document.querySelector('body').classList.remove('vis')
}
btn.addEventListener('click', handleClick)
canceler.addEventListener('click', cancelerPurchase)
const conf = document.querySelector('.popUpConf')
function purchaseClick()
{
    conf.style.visibility = 'visible'
}
purchase.addEventListener('click', purchaseClick)
conf.querySelector('.cancleConf').addEventListener('click', () =>
{
    conf.style.visibility = 'hidden'
    popUp.style.visibility = 'hidden'
    document.querySelector('body').classList.remove('vis')
    from.value = ''
    to.value = ''
    date.value = ''
})
conf.querySelector('.confirm').addEventListener('click', () =>
{
    const email = document.querySelector('.email')
    const phone = document.querySelector('.phone')
    const visa = document.querySelector('.visa')
    if (email.value.length>0 && phone.value.length>0 && visa.value.length>0 && firstName.value.length>0 && lastName.value.length>0)
    {
        select.options[select.selectedIndex].disabled = true
        Swal.fire(
            'Awesome!',
            'Now Your Have a Seat With Us!',
            'success'
        )
        popUp.style.visibility='hidden'
        conf.style.visibility='hidden'
        document.querySelector('body').classList.remove('vis')
        from.value = ''
        to.value = ''
        date.value = ''
    }
})