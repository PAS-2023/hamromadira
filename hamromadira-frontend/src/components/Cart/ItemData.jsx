import React from 'react'

const ItemData = ({productData}) => {
  return (
      <>
          {
              productData.slice(0, 3).map((item) => {
                  const { productName } = item;
                  return (
                      <tr>
                          <td>
                              {productName}
                          </td>
                      </tr>
                  )
            
                 
                        
             })
          }
      </>
  )
}

export default ItemData
