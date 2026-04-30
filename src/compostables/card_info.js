const country_code_NO = '47'

export function makePhoneNumber(number) {
    let digits = []
    let new_number = ''

    if (number) {
        digits = number.split(' ')
    }

    digits.forEach(element => {
        new_number += element.toString()
    });

    return new_number
}

export function usePhoneNumber(number) {
    const operation = `tel:${country_code_NO}`

    return operation + makePhoneNumber(number)
}

export function showPhoneNumber(number) {
    return '+' + country_code_NO + ' ' + number
}

export function useEmailAddress(mail) {
    const operation = 'mailto:'

    return operation + mail
}