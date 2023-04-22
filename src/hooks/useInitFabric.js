import { fabric } from "fabric";



function useInitFabric() {
    console.log('useInitFabric')
    const canvas = new fabric.Canvas("canvas", {
        backgroundColor: '#ccc',
    });

    return {
        canvas
    }
}

export default useInitFabric