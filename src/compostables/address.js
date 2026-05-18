export const address = '22 Klaus Hanssens vei'
export const postcode = '5053 Bergen'
export const open_hours = '08:00 - 15:30'
export const phone = '55 54 11 50'
export const email = 'alf@alf.no'

export function useAddress() {
    const info = {
        address: address,
        postcode: postcode,
        open_hours: open_hours,
        phone: phone,
        email: email,
    }

    return { info }
}