const country_code_NO = '47'

export function usePhoneNumber(number) {
    const operation = 'tel:00'

    let digits = []
    let new_number = ''

    if (number) {
        digits = number.split(' ')
    }

    digits.forEach(element => {
        new_number += element.toString()
    });

    return operation + country_code_NO + new_number
}

export function showPhoneNumber(number) {
    return '+' + country_code_NO + ' ' + number
}

export function useEmailAddress(mail) {
    const operation = 'mailto:'

    return operation + mail
}