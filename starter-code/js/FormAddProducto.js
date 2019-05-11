var formAddProducto = {
    elem: null,
    listaElem: null,
    isValid: false,

    resetForm: () => {

        formAddProducto.listaElem.forEach(elem => {
            elem.value = '';
            elem.className = "form-control"
        });

        this.isValid = false;

    },
    inicializar: (elemNombre, elemDesc, elemQ, elemPU) => {

        let f= formAddProducto;

        f.elem = {
            nombre: elemNombre,
            desc: elemDesc,
            q: elemQ,
            pu: elemPU
        };

        f.listaElem = [
            elemNombre, elemDesc, elemQ, elemPU
        ];

        let fnGetValidacionForm = () => {

            let isValid = true;

            //validar que el elemnto tiene texto
            f.listaElem.forEach(elem => {

                let valor = elem.value;

                if (valor === undefined || valor === '') {
                    isValid = false;
                    elem.className = "form-control error"
                } else {
                    elem.className = "form-control"
                }

            });

            //validar q y pu
            if (isValid) {
                let pu = parseFloat(f.elem.pu.value);

                if (pu.toString() !== f.elem.pu.value) {
                    isValid = false;
                    f.elem.pu.className = "form-control error";
                }

                let q = parseInt(f.elem.q.value);
                if (q.toString() !== f.elem.q.value) {
                    isValid = false;
                    f.elem.q.className = "form-control error";
                }
            }

            return isValid;
        };


        f.listaElem.forEach(elem => {

            elem.onchange = (event) => {
                formAddProducto.isValid = fnGetValidacionForm();

            };

            console.log(formAddProducto.isValid?1:0);
        });

    },
    addProducto: (callbackAddModel) => {

        let f=formAddProducto;

        if (!f.isValid) {
            return;
        }

        let model = {
            nombre: f.elem.nombre.value,
            desc: f.elem.desc.value,
            q: parseInt(f.elem.q.value),
            pu: parseFloat(f.elem.pu.value)
        };

        callbackAddModel(model);

        f.resetForm();
    }
};