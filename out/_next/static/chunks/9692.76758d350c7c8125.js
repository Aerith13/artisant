"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9692],{89692:function(t,r,e){e.r(r),e.d(r,{Edition:function(){return c}});var a=e(9279),n=e(5749),s=e(63891);e(13550),e(64063),e(2162),e(77191),e(54098),e(54146);class c extends s.S{static contractRoles=n.dG;constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.ds(t,r,s,a,e);super(p,e,i),this.abi=n.e.parse(s||[]),this.metadata=new n.ah(this.contractWrapper,n.dI,this.storage),this.app=new n.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new n.ai(this.contractWrapper,c.contractRoles),this.royalties=new n.aj(this.contractWrapper,this.metadata),this.sales=new n.ak(this.contractWrapper),this.encoder=new n.ag(this.contractWrapper),this.estimator=new n.aQ(this.contractWrapper),this.events=new n.aR(this.contractWrapper),this.platformFees=new n.aT(this.contractWrapper),this.interceptor=new n.aS(this.contractWrapper),this.signature=new n.aM(this.contractWrapper,this.storage,this.roles),this.owner=new n.aV(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){let t=await this.contractWrapper.read("hasRole",[(0,n.bI)("transfer"),a.d]);return!t}mint=(0,n.dt)(async t=>this.erc1155.mint.prepare(t));mintTo=(0,n.dt)(async(t,r)=>this.erc1155.mintTo.prepare(t,r));async getMintTransaction(t,r){return this.erc1155.getMintTransaction(t,r)}mintAdditionalSupply=(0,n.dt)(async(t,r)=>this.erc1155.mintAdditionalSupply.prepare(t,r));mintAdditionalSupplyTo=(0,n.dt)(async(t,r,e)=>this.erc1155.mintAdditionalSupplyTo.prepare(t,r,e));mintBatch=(0,n.dt)(async t=>this.erc1155.mintBatch.prepare(t));mintBatchTo=(0,n.dt)(async(t,r)=>this.erc1155.mintBatchTo.prepare(t,r));burn=(0,n.dt)(async(t,r)=>this.erc1155.burn.prepare(t,r));async prepare(t,r,e){return n.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}},63891:function(t,r,e){e.d(r,{S:function(){return n}});var a=e(5749);class n{get chainId(){return this._chainId}constructor(t,r,e){this.contractWrapper=t,this.storage=r,this.erc1155=new a.aL(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async totalSupply(t){return this.erc1155.totalSupply(t)}async balanceOf(t,r){return this.erc1155.balanceOf(t,r)}async balance(t){return this.erc1155.balance(t)}async isApproved(t,r){return this.erc1155.isApproved(t,r)}transfer=(0,a.dt)((()=>{var t=this;return async function(r,e,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.transfer.prepare(r,e,a,n)}})());setApprovalForAll=(0,a.dt)(async(t,r)=>this.erc1155.setApprovalForAll.prepare(t,r));airdrop=(0,a.dt)((()=>{var t=this;return async function(r,e,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.airdrop.prepare(r,e,a,n)}})())}}}]);