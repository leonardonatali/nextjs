import React from 'react'
import Title from '../../../components/Title'

export default function usingTitle (): JSX.Element {
  return (
        <div>
            <h1>Using title</h1>
            <Title title='this is the title' subtitle='this is another title'/>
        </div>
  )
}
