import"./vue.8179fce5.js";import{p as s}from"./phaser.752ecb3b.js";import{b as o}from"./balls.63b1ed2a.js";import{_ as l}from"./index.45edc19b.js";import{r,x as n,o as c,t as h,v as d}from"./@vue.5b16b455.js";import"./vue-router.07b92c73.js";import"./vant.ddc8670e.js";import"./@vant.2311f1a3.js";class p extends Phaser.Scene{constructor(t,e){super();this.width=t,this.height=e}preload(){this.load.spritesheet("balls",o,{frameWidth:17,frameHeight:17})}create(){const t=new Phaser.Geom.Circle(this.width/2,this.height/2,200);this.group=this.add.group({key:"balls",frame:[0,1,5],repeat:10}),Phaser.Actions.PlaceOnCircle(this.group.getChildren(),t),this.tween=this.tweens.addCounter({from:200,to:100,duration:2e3,delay:0,ease:"Sine.easeInOut",repeat:-1,yoyo:!0})}update(){Phaser.Actions.RotateAroundDistance(this.group.getChildren(),{x:this.width/2,y:this.height/2},.01,this.tween.getValue())}}const u={setup(i){let t=r(null),e=r(null);return n(()=>{let a={type:s.exports.AUTO,width:e.value.clientWidth,height:e.value.clientHeight,parent:t.value,backgroundColor:"#2d2d2d",scene:[new p(e.value.clientWidth,e.value.clientHeight)]};new s.exports.Game(a)}),(a,m)=>(c(),h("div",{class:"canvas_box",ref_key:"canvasBox",ref:e},[d("div",{ref_key:"myCanvas",ref:t},null,512)],512))}};var C=l(u,[["__scopeId","data-v-1b067dd8"]]);export{C as default};
