import { NextFunction, Request, Response } from 'express';
import { rows } from 'mssql';
import {Request as sql} from 'tedious';

export const getAllCuotas = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const resp = new sql("Select * from PlanCuotas",(err,resp:any)=>{
			if(!err) {
				//id - terminal
				console.log(resp.row)				
				res.status(200).json({rows:resp.row})
			}


		})
		
	} catch (err) {
		next(err);
	}
};
