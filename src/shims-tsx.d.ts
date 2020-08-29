import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  interface Window { 
    bus: any, 
    $store:any,
    Lockr:any,
    $utill:any,
    $echarts:any,
    $moment:any
    $Ajax:any
  }
}
