import { useState } from "react"
const UseSignUpDataHOOK=(data)=>{
const [value,tempSetvalue]=useState(data)
    const setValue=(data)=>{
      tempSetvalue(
        {...value,
        ...data}
      )
    }
return [value,setValue]
}
export {UseSignUpDataHOOK}

