import"./vue.8179fce5.js";import{p as a}from"./phaser.752ecb3b.js";import{_ as n}from"./index.07e19abe.js";import{r as s,x as i,o as d,t as c,v as l}from"./@vue.5b16b455.js";import"./vue-router.07b92c73.js";import"./vant.ddc8670e.js";import"./@vant.2311f1a3.js";var p="./assets/diamonds32x24x5.023a74b3.png";class m extends a.exports.Scene{constructor(){super()}preload(){this.load.spritesheet("diamonds",p,{frameWidth:32,frameHeight:24})}create(){const e=this.add.group({key:"diamonds",frame:[0,1,2,3,4],frameQuantity:20});a.exports.Actions.GridAlign(e.getChildren(),{width:10,height:10,cellWidth:32,cellHeight:32,x:20,y:24})}}const u={setup(o){let e=s(null),t=s(null);return i(()=>{let r={type:a.exports.AUTO,width:t.value.clientWidth,height:t.value.clientHeight,parent:e.value,backgroundColor:"#2d2d2d",scene:[new m]};new a.exports.Game(r)}),(r,_)=>(d(),c("div",{class:"canvas_box",ref_key:"canvasBox",ref:t},[l("div",{ref_key:"myCanvas",ref:e},null,512)],512))}};var j=n(u,[["__scopeId","data-v-2f74ddaa"]]);export{j as default};
