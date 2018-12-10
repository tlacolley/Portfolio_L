
"use strict";

function runDemo(canvasId){
  var canvas = document.getElementById(canvasId);
  var engine = new BABYLON.Engine(canvas, true);

  // Création de la scène
  var scene =  new BABYLON.Scene(engine);
  scene.gravity = new BABYLON.Vector3(0, -9.81, 0)

  // Ajout d'une caméra et de son contrôleur
  var camera = new BABYLON.FreeCamera("MainCamera", new BABYLON.Vector3(0,2.5,5), scene);
  camera.applyGravity = true;
  camera.checkCollisions = true;

  camera.speed = 0.5;
  camera.angulateSensibility = 1000;

  camera.keysUp = [90]; // Touche Z
  camera.keysDown = [83]; // Touche S
  camera.keysLeft = [81]; // Touche Q
  camera.keysRight = [68]; // Touche D;

  scene.activeCamera.attachControl(canvas);

  // Ajout d'une lumière
  var light = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(0,10,0),scene);
  light.diffuse = new BABYLON.Color3(1, 1, 1);
  light.specular = new BABYLON.Color3(0.6, 0.6, 0.6);
  light.intensity = 1.5;

  // Lancement de la boucle principale
  engine.runRenderLoop(function() {
      scene.render();
   });

  

}























runDemo("renderCanvas");