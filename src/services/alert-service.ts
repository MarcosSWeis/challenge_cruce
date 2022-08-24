import Swal from "sweetalert2";
import { IAlert, IonConfirm } from "../interfaces/alert"
export default class Alert {

    //Button colors follow UI guidelines, icons colors are defaulted from the sweetAlert2 package

    static buttonConfirmColor = '#2378d3'
    static buttonCancelColor = '#DB5752'


    static success({ title, message }: IAlert) {
        Swal.fire({
            title,
            text: message,
            confirmButtonColor: this.buttonConfirmColor,
            icon: 'success',
        })
    }

    static error({ title, message }: IAlert) {
        Swal.fire({
            title,
            text: message,
            confirmButtonColor: this.buttonConfirmColor,
            icon: 'error',
        })
    }


    static info({ title, message }: IAlert) {
        Swal.fire({
            title,
            text: message,
            confirmButtonColor: this.buttonConfirmColor,
            icon: 'info',
        })
    }


    static confirm({ title, message }: IAlert, onConfirm: IonConfirm['confirm']) {

        Swal.fire({
            title,
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: this.buttonConfirmColor,
            confirmButtonText: 'Aceptar',
            cancelButtonColor: this.buttonCancelColor,
            cancelButtonText: 'Cancelar',
        }).then(result => {
            if (result.isConfirmed) {
                return onConfirm()
            }
        })
    }



}