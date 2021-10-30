const { default: Swal } = require("sweetalert2")

const useSwal = () => {
    const swalConfirmation = (button, text = "") => {
        return Swal.fire({
            title: 'Are you sure?',
            text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, ${button} !`
        })
    }

    const swalSuccess = (title) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title,
            showConfirmButton: false,
            timer: 1500
        })
    }

    return {
        swalConfirmation,
        swalSuccess
    }
}

export default useSwal;