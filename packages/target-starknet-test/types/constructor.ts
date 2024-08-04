/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Contract } from "starknet";
import type { BigNumberish } from "starknet/utils/number";
import type BN from "bn.js";

export type Point = { x: BigNumberish; y: BigNumberish };
export type PointOutput = { x: BN; y: BN };

export type PointPair = { p1: Point; p2: Point };
export type PointPairOutput = { p1: PointOutput; p2: PointOutput };

export interface constructor extends Contract {
  functions: {};
  callStatic: {};
  populateTransaction: {};
  estimateFee: {};
}
