// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1],
      5: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  
  
  const v189 = stdlib.protect(ctc0, await interact.getId(), {
    at: './src/index.rsh:34:43:application',
    fs: ['at ./src/index.rsh:33:17:application call to [unknown function] (defined at: ./src/index.rsh:33:21:function exp)'],
    msg: 'getId',
    who: 'Creator'
    });
  const v190 = stdlib.protect(ctc0, await interact.getAuctionItem(), {
    at: './src/index.rsh:35:61:application',
    fs: ['at ./src/index.rsh:33:17:application call to [unknown function] (defined at: ./src/index.rsh:33:21:function exp)'],
    msg: 'getAuctionItem',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v189, v190],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/index.rsh:37:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./src/index.rsh:37:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v192, v193], secs: v195, time: v194, didSend: v30, from: v191 } = txn1;
      
      ;
      const v196 = v191;
      const v197 = v194;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v192, v193], secs: v195, time: v194, didSend: v30, from: v191 } = txn1;
  ;
  let v196 = v191;
  let v197 = v194;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 2,
      out_tys: [ctc1, ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v214, v215], secs: v217, time: v216, didSend: v52, from: v213 } = txn2;
    ;
    const v219 = stdlib.add(v197, v215);
    let v220 = v214;
    let v221 = true;
    let v222 = v196;
    let v223 = v216;
    let v224 = v197;
    
    while (await (async () => {
      const v235 = stdlib.gt(v219, v224);
      
      return v235;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc1],
        timeoutAt: ['time', v219],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v196, v219, v220, v221, v222, v223],
          evt_cnt: 0,
          funcNum: 5,
          lct: v223,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./src/index.rsh:60:23:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v275, time: v274, didSend: v156, from: v273 } = txn4;
            
            ;
            const cv220 = v220;
            const cv221 = v221;
            const cv222 = v222;
            const cv223 = v274;
            const cv224 = v223;
            
            await (async () => {
              const v220 = cv220;
              const v221 = cv221;
              const v222 = cv222;
              const v223 = cv223;
              const v224 = cv224;
              
              if (await (async () => {
                const v235 = stdlib.gt(v219, v224);
                
                return v235;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v278 = v221 ? stdlib.checkedBigNumberify('./src/index.rsh:81:29:decimal', stdlib.UInt_max, '0') : v220;
                sim_r.txns.push({
                  amt: v278,
                  kind: 'from',
                  to: v196,
                  tok: undefined /* Nothing */
                  });
                const cv196 = v222;
                const cv197 = v223;
                
                await (async () => {
                  const v196 = cv196;
                  const v197 = cv197;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc1, ctc1, ctc3, ctc2, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v275, time: v274, didSend: v156, from: v273 } = txn4;
        ;
        const cv220 = v220;
        const cv221 = v221;
        const cv222 = v222;
        const cv223 = v274;
        const cv224 = v223;
        
        v220 = cv220;
        v221 = cv221;
        v222 = cv222;
        v223 = cv223;
        v224 = cv224;
        
        continue;
        }
      else {
        const {data: [v260], secs: v262, time: v261, didSend: v131, from: v259 } = txn3;
        ;
        const v266 = stdlib.gt(v260, v220);
        stdlib.assert(v266, {
          at: './src/index.rsh:73:22:application',
          fs: ['at ./src/index.rsh:72:19:application call to [unknown function] (defined at: ./src/index.rsh:72:19:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v267 = v221 ? stdlib.checkedBigNumberify('./src/index.rsh:75:37:decimal', stdlib.UInt_max, '0') : v220;
        ;
        const cv220 = v260;
        const cv221 = false;
        const cv222 = v259;
        const cv223 = v261;
        const cv224 = v223;
        
        v220 = cv220;
        v221 = cv221;
        v222 = cv222;
        v223 = cv223;
        v224 = cv224;
        
        continue;}
      
      }
    const v278 = v221 ? stdlib.checkedBigNumberify('./src/index.rsh:81:29:decimal', stdlib.UInt_max, '0') : v220;
    ;
    const cv196 = v222;
    const cv197 = v223;
    
    v196 = cv196;
    v197 = cv197;
    
    continue;
    
    }
  return;
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    startingBid: ctc2,
    timeout: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc1,
    Some: ctc2
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v192, v193], secs: v195, time: v194, didSend: v30, from: v191 } = txn1;
  ;
  let v196 = v191;
  let v197 = v194;
  
  while (await (async () => {
    
    return true;})()) {
    const v203 = ctc.selfAddress();
    stdlib.protect(ctc1, await interact.showOwner(v192, v196, v193), {
      at: './src/index.rsh:46:27:application',
      fs: ['at ./src/index.rsh:45:17:application call to [unknown function] (defined at: ./src/index.rsh:45:21:function exp)'],
      msg: 'showOwner',
      who: 'Owner'
      });
    const v205 = stdlib.addressEq(v203, v196);
    let v206;
    if (v205) {
      const v207 = stdlib.protect(ctc3, await interact.getAuctionProps(), {
        at: './src/index.rsh:48:87:application',
        fs: ['at ./src/index.rsh:45:17:application call to [unknown function] (defined at: ./src/index.rsh:45:21:function exp)'],
        msg: 'getAuctionProps',
        who: 'Owner'
        });
      v206 = v207;
      }
    else {
      const v210 = {
        startingBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        timeout: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      v206 = v210;
      }
    const v211 = v206.startingBid;
    const v212 = v206.timeout;
    stdlib.protect(ctc1, await interact.showAuctionProps(v211, v212), {
      at: './src/index.rsh:49:34:application',
      fs: ['at ./src/index.rsh:45:17:application call to [unknown function] (defined at: ./src/index.rsh:45:21:function exp)'],
      msg: 'showAuctionProps',
      who: 'Owner'
      });
    
    const txn2 = await (ctc.sendrecv({
      args: [v196, v197, v211, v212],
      evt_cnt: 2,
      funcNum: 2,
      lct: v197,
      onlyIf: v205,
      out_tys: [ctc2, ctc2],
      pay: [stdlib.checkedBigNumberify('./src/index.rsh:52:10:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v214, v215], secs: v217, time: v216, didSend: v52, from: v213 } = txn2;
        
        ;
        const v219 = stdlib.add(v197, v215);
        const v220 = v214;
        const v221 = true;
        const v222 = v196;
        const v223 = v216;
        const v224 = v197;
        
        if (await (async () => {
          const v235 = stdlib.gt(v219, v224);
          
          return v235;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v278 = v221 ? stdlib.checkedBigNumberify('./src/index.rsh:81:29:decimal', stdlib.UInt_max, '0') : v220;
          sim_r.txns.push({
            amt: v278,
            kind: 'from',
            to: v196,
            tok: undefined /* Nothing */
            });
          const cv196 = v222;
          const cv197 = v223;
          
          await (async () => {
            const v196 = cv196;
            const v197 = cv197;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();}
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v214, v215], secs: v217, time: v216, didSend: v52, from: v213 } = txn2;
    ;
    const v219 = stdlib.add(v197, v215);
    let v220 = v214;
    let v221 = true;
    let v222 = v196;
    let v223 = v216;
    let v224 = v197;
    
    while (await (async () => {
      const v235 = stdlib.gt(v219, v224);
      
      return v235;})()) {
      const v241 = ctc.selfAddress();
      const v243 = stdlib.addressEq(v241, v196);
      const v245 = stdlib.addressEq(v241, v222);
      const v246 = v245 ? false : true;
      const v247 = v243 ? false : v246;
      let v248;
      if (v247) {
        const v249 = stdlib.protect(ctc4, await interact.getBid(v220), {
          at: './src/index.rsh:65:90:application',
          fs: ['at ./src/index.rsh:64:16:application call to [unknown function] (defined at: ./src/index.rsh:64:16:function exp)', 'at ./src/index.rsh:64:16:application call to [unknown function] (defined at: ./src/index.rsh:64:16:function exp)'],
          msg: 'getBid',
          who: 'Owner'
          });
        v248 = v249;
        }
      else {
        const v252 = ['None', null];
        v248 = v252;
        }
      let v253;
      switch (v248[0]) {
        case 'None': {
          const v254 = v248[1];
          v253 = false;
          
          break;
          }
        case 'Some': {
          const v255 = v248[1];
          const v256 = stdlib.gt(v255, v220);
          v253 = v256;
          
          break;
          }
        }
      const v257 = stdlib.fromSome(v248, stdlib.checkedBigNumberify('./src/index.rsh:68:38:decimal', stdlib.UInt_max, '0'));
      
      const txn3 = await (ctc.sendrecv({
        args: [v196, v219, v220, v221, v222, v223, v257],
        evt_cnt: 1,
        funcNum: 4,
        lct: v223,
        onlyIf: v253,
        out_tys: [ctc2],
        pay: [v257, []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v260], secs: v262, time: v261, didSend: v131, from: v259 } = txn3;
          
          sim_r.txns.push({
            amt: v260,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v267 = v221 ? stdlib.checkedBigNumberify('./src/index.rsh:75:37:decimal', stdlib.UInt_max, '0') : v220;
          sim_r.txns.push({
            amt: v267,
            kind: 'from',
            to: v222,
            tok: undefined /* Nothing */
            });
          const cv220 = v260;
          const cv221 = false;
          const cv222 = v259;
          const cv223 = v261;
          const cv224 = v223;
          
          await (async () => {
            const v220 = cv220;
            const v221 = cv221;
            const v222 = cv222;
            const v223 = cv223;
            const v224 = cv224;
            
            if (await (async () => {
              const v235 = stdlib.gt(v219, v224);
              
              return v235;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v278 = v221 ? stdlib.checkedBigNumberify('./src/index.rsh:81:29:decimal', stdlib.UInt_max, '0') : v220;
              sim_r.txns.push({
                amt: v278,
                kind: 'from',
                to: v196,
                tok: undefined /* Nothing */
                });
              const cv196 = v222;
              const cv197 = v223;
              
              await (async () => {
                const v196 = cv196;
                const v197 = cv197;
                
                if (await (async () => {
                  
                  return true;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();}})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: ['time', v219],
        tys: [ctc5, ctc2, ctc2, ctc6, ctc5, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v196, v219, v220, v221, v222, v223],
          evt_cnt: 0,
          funcNum: 5,
          lct: v223,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./src/index.rsh:60:23:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v275, time: v274, didSend: v156, from: v273 } = txn4;
            
            ;
            const cv220 = v220;
            const cv221 = v221;
            const cv222 = v222;
            const cv223 = v274;
            const cv224 = v223;
            
            await (async () => {
              const v220 = cv220;
              const v221 = cv221;
              const v222 = cv222;
              const v223 = cv223;
              const v224 = cv224;
              
              if (await (async () => {
                const v235 = stdlib.gt(v219, v224);
                
                return v235;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v278 = v221 ? stdlib.checkedBigNumberify('./src/index.rsh:81:29:decimal', stdlib.UInt_max, '0') : v220;
                sim_r.txns.push({
                  amt: v278,
                  kind: 'from',
                  to: v196,
                  tok: undefined /* Nothing */
                  });
                const cv196 = v222;
                const cv197 = v223;
                
                await (async () => {
                  const v196 = cv196;
                  const v197 = cv197;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc2, ctc2, ctc6, ctc5, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v275, time: v274, didSend: v156, from: v273 } = txn4;
        ;
        const cv220 = v220;
        const cv221 = v221;
        const cv222 = v222;
        const cv223 = v274;
        const cv224 = v223;
        
        v220 = cv220;
        v221 = cv221;
        v222 = cv222;
        v223 = cv223;
        v224 = cv224;
        
        continue;
        }
      else {
        const {data: [v260], secs: v262, time: v261, didSend: v131, from: v259 } = txn3;
        ;
        const v266 = stdlib.gt(v260, v220);
        stdlib.assert(v266, {
          at: './src/index.rsh:73:22:application',
          fs: ['at ./src/index.rsh:72:19:application call to [unknown function] (defined at: ./src/index.rsh:72:19:function exp)'],
          msg: null,
          who: 'Owner'
          });
        const v267 = v221 ? stdlib.checkedBigNumberify('./src/index.rsh:75:37:decimal', stdlib.UInt_max, '0') : v220;
        ;
        const cv220 = v260;
        const cv221 = false;
        const cv222 = v259;
        const cv223 = v261;
        const cv224 = v223;
        
        v220 = cv220;
        v221 = cv221;
        v222 = cv222;
        v223 = cv223;
        v224 = cv224;
        
        continue;}
      
      }
    const v278 = v221 ? stdlib.checkedBigNumberify('./src/index.rsh:81:29:decimal', stdlib.UInt_max, '0') : v220;
    ;
    const cv196 = v222;
    const cv197 = v223;
    
    v196 = cv196;
    v197 = cv197;
    
    continue;
    
    }
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAJAAEFIAgoUQIDJgIBAAAiNQAxGEECTilkSSJbNQEhBFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQQMQADDSSQMQABKJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/4AEzJmSXLAyBjT/D0Q0A1cAIDT/NAMhBVs0A1cwARc0A1cxIDIGNAMhBltCASVIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSSVbNf8hBVs1/kk1BRc1/YAE+YuveDT9FlCwMgY0/wxENP2IAZw0/TT+DUSxIrIBNP4iNANXMAEXTbIII7IQNANXMSCyB7M0A1cAIDT/NP0iMQAyBjQDIQZbQgCySSEHDEAAUyEHEkQhCDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BUkiWzX9IQRbNfyABPMtCgw0/RZQNPwWULA0/zT+NPwINP0jNP8yBjT+QgBYIhJEIjQBEkQ0BEkiEkw0AhIRREk1BUlXAIA1/1eAgDX+gARxbxQNNP9QNP5QsIGgjQaIANYxADIGQgAANf9JNf40/xZQKEsBVwAoZ0ghCDUBMgY1AkIAdjX/Nf41/TX8Nfs1+jX5NPo0/w1BACo0+TT6FlA0+xZQNPwWUQcIUDT9UDT+FlAoSwFXAFlnSCQ1ATIGNQJCADaxIrIBNPsiNPxNsggjshA0+bIHszT9NP5C/4kxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 89,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v192",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v193",
                "type": "tuple"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v192",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v193",
                "type": "tuple"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v214",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v215",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v260",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v214",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v215",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v260",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620010cf380380620010cf8339810160408190526200002691620002d2565b60008055436003556040517f3574e82013381ac65aab1acddfa7f3c921c0ff039976fb3fafae7e03d8bc3c57906200006290339084906200034b565b60405180910390a16200007834156007620000a4565b6200008262000140565b6020808201805133905251439101526200009c81620000ce565b50506200040c565b81620000ca5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080518082018252600080825260208083018281528582018051516001600160a01b03168086529051830151825260039093554360015584518083019390935251828501528351808303850181526060909201909352805191926200013b926002929091019062000180565b505050565b60405180604001604052806000151581526020016200017b604051806040016040528060006001600160a01b03168152602001600081525090565b905290565b8280546200018e90620003cf565b90600052602060002090601f016020900481019282620001b25760008555620001fd565b82601f10620001cd57805160ff1916838001178555620001fd565b82800160010185558215620001fd579182015b82811115620001fd578251825591602001919060010190620001e0565b506200020b9291506200020f565b5090565b5b808211156200020b576000815560010162000210565b604080519081016001600160401b03811182821017156200025757634e487b7160e01b600052604160045260246000fd5b60405290565b6000608082840312156200027057600080fd5b604051608081016001600160401b0381118282101715620002a157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000818303610120811215620002e757600080fd5b620002f162000226565b83518152610100601f19830112156200030957600080fd5b6200031362000226565b91506200032485602086016200025d565b8252620003358560a086016200025d565b6020830152816020820152809250505092915050565b60006101408201905060018060a01b03841682528251602083015260208301516200039b604084018251805182526020810151602083015260408101516040830152606081015160608301525050565b602090810151805160c08501529081015160e084015260408101516101008401526060810151610120840152509392505050565b600181811c90821680620003e457607f821691505b602082108114156200040657634e487b7160e01b600052602260045260246000fd5b50919050565b610cb3806200041c6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806383230757146100835780638e314769146100985780639014596a146100ab578063a209ad4e146100be578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b50600154610070565b61005d6100a6366004610a2c565b6100f4565b61005d6100b9366004610a4f565b610290565b61005d6100cc366004610a2c565b610437565b3480156100dd57600080fd5b506100e6610632565b60405161007a929190610a61565b61010460056000541460116106cf565b61011e8135158061011757506001548235145b60126106cf565b60008080556002805461013090610abe565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610abe565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610b1d565b90506101d5816020015143101560136106cf565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610206929190610bba565b60405180910390a161021a341560106106cf565b6102226108ee565b815181516001600160a01b0391821690526020808401518351820152604080850151828501805191909152606080870151825190151594019390935260808087015182519516949092019390935282514392019190915260a08401519151015261028b816106f8565b505050565b6102a060036000541460096106cf565b6102ba813515806102b357506001548235145b600a6106cf565b6000808055600280546102cc90610abe565b80601f01602080910402602001604051908101604052809291908181526020018280546102f890610abe565b80156103455780601f1061031a57610100808354040283529160200191610345565b820191906000526020600020905b81548152906001019060200180831161032857829003601f168201915b505050505080602001905181019061035d9190610bf2565b604080513381528435602080830191909152850135818301529084013560608201529091507feade97c60783e4c8b7590ebdcad0dcf3d731471c98f3f06328d9701c9d0e19699060800160405180910390a16103bb341560086106cf565b6103c36108ee565b815181516001600160a01b03909116905260208201516103e890604085013590610c57565b815160209081019190915280820180518583013590528051600190830152835181516001600160a01b039091166040909101528051436060909101529083015190516080015261028b816106f8565b610447600560005414600d6106cf565b6104618135158061045a57506001548235145b600e6106cf565b60008080556002805461047390610abe565b80601f016020809104026020016040519081016040528092919081815260200182805461049f90610abe565b80156104ec5780601f106104c1576101008083540402835291602001916104ec565b820191906000526020600020905b8154815290600101906020018083116104cf57829003601f168201915b50505050508060200190518101906105049190610b1d565b905061051781602001514310600f6106cf565b6040805133815283356020808301919091528401358183015290517f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc09181900360600190a161056d34602084013514600b6106cf565b604081015161058390602084013511600c6106cf565b80608001516001600160a01b03166108fc82606001516105a75782604001516105aa565b60005b6040518115909202916000818181858888f193505050501580156105d2573d6000803e3d6000fd5b506105db6108ee565b815181516001600160a01b039091169052602080830151825182015280820180518583013590528051600092019190915280513360409091015280514360609091015260a083015190516080015261028b816106f8565b60006060600054600280805461064790610abe565b80601f016020809104026020016040519081016040528092919081815260200182805461067390610abe565b80156106c05780601f10610695576101008083540402835291602001916106c0565b820191906000526020600020905b8154815290600101906020018083116106a357829003601f168201915b50505050509050915091509091565b816106f45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8060200151608001518160000151602001511115610803576040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528151516001600160a01b0390811680835283516020908101518185019081528186018051516040808801918252825185015115156060808a01918252845183015189166080808c01918252955182015160a0808d019182526005600055436001558551998a019a909a5296519388019390935292519286019290925290511515918401919091525190931691810191909152905160c082015260e0015b6040516020818303038152906040526002908051906020019061028b929190610941565b8060000151600001516001600160a01b03166108fc82602001516020015161083057602083015151610833565b60005b6040518115909202916000818181858888f1935050505015801561085b573d6000803e3d6000fd5b506108646109c5565b602080830180516040015183830180516001600160a01b039092169091529051606001519051909101526106f48161089a565b50565b604080518082019091526000808252602082015260208281018051516001600160a01b03168084529051820151838301908152600360005543600155604080519384019290925251908201526060016107df565b604080516080810182526000918101828152606082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b905290565b82805461094d90610abe565b90600052602060002090601f01602090048101928261096f57600085556109b5565b82601f1061098857805160ff19168380011785556109b5565b828001600101855582156109b5579182015b828111156109b557825182559160200191906001019061099a565b506109c19291506109ff565b5090565b604051806040016040528060001515815260200161093c604051806040016040528060006001600160a01b03168152602001600081525090565b5b808211156109c15760008155600101610a00565b600060408284031215610a2657600080fd5b50919050565b600060408284031215610a3e57600080fd5b610a488383610a14565b9392505050565b600060608284031215610a2657600080fd5b82815260006020604081840152835180604085015260005b81811015610a9557858101830151858201606001528201610a79565b81811115610aa7576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610ad257607f821691505b60208210811415610a2657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610b0a57600080fd5b919050565b801515811461089757600080fd5b600060c08284031215610b2f57600080fd5b60405160c0810181811067ffffffffffffffff82111715610b6057634e487b7160e01b600052604160045260246000fd5b604052610b6c83610af3565b815260208301516020820152604083015160408201526060830151610b9081610b0f565b6060820152610ba160808401610af3565b608082015260a083015160a08201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135610be281610b0f565b8015156040840152509392505050565b600060408284031215610c0457600080fd5b6040516040810181811067ffffffffffffffff82111715610c3557634e487b7160e01b600052604160045260246000fd5b604052610c4183610af3565b8152602083015160208201528091505092915050565b60008219821115610c7857634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220727f4adecba2c670d84cfddb1811fe8d84ea39a3b1a93dd04cc8086c647c85f564736f6c634300080c0033`,
  BytecodeLen: 4303,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './src/index.rsh:87:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/index.rsh:42:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/index.rsh:60:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "Owner": Owner
  };
export const _APIs = {
  };
