import {Producto} from '../types/producto.type';

export async function getProducts(): Promise<Producto[]> {
    try {
        const url = 'https://localhost:7176/api/Productos';

        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await res.json() as Producto[];
        let response: Producto[] = [];

        data.forEach(element => {
            element.fechaCreacion = new Date(element.fechaCreacion).toLocaleDateString();
            response.push(element);
        });

        return response;

    } catch (e) {
        console.log(e);
        throw e; 
    }
}

export async function postProduct(nombre:string, precio:number): Promise<Boolean> {
    const url = 'https://localhost:7176/api/Productos';
    const post = {
        nombre: nombre,
        precio: precio,
    };

    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        });

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function getById(id:number): Promise<Producto> {
    const url = `https://localhost:7176/api/Productos/${id}`;
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await res.json() as Producto;

        data.fechaCreacion = new Date(data.fechaCreacion).toLocaleDateString();
        return data;

    } catch (e) {
        console.log(e);
        throw e;
    }
}

export async function editProd(id:number, nombre:string, precio:number): Promise<Producto> {
    const url = `https://localhost:7176/api/Productos/${id}`;
    try {
        const edit = {
            nombre: nombre,
            precio: precio,
        };

        await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(edit)
        });
         
        const res = getById(id);
        return res;

    } catch (e) {
        console.log(e);
        throw e;
    }
}

export async function deleteProd(id:number): Promise<boolean> {
    const url = `https://localhost:7176/api/Productos/${id}`;
    try {
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        return true;

    } catch (e) {
        console.log(e);
        return false;
    }
}
