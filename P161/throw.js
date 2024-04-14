AFRAME.registerComponent("bowling", {
    init: function(){
        this.bowlBall()
    }, 
    bowlBall:function(){
        window.addEventListener("keydown", (e)=>{
            if(e.key==="z"){
                var ball = document.createElement("a-entity")
                ball.setAttribute("geometry", {
                    primitive:"sphere", 
                    radius: 0.15, 
                })
                ball.setAttribute("material", "color", "black")
                var cam = document.querySelector("#camera")
                pos=cam.getAttribute("position")
                ball.setAttribute("position", {
                    x: pos.x, 
                    y: pos.y, 
                    z: pos.z, 
                })
                var camera = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                ball.setAttribute("velocity", direction.multiplyScalar(-10))
                var scene = document.querySelector("#scene")
                scene.appendChild(bullet)
            }
        })
    }
})