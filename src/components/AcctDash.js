import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { formatEther } from '@ethersproject/units'
import styled from 'styled-components'
import {borderWidth, borderRadius} from 'context/responsive/cssSizes'

import { Panel } from 'components/UI'

function ChainId() {
    const { chainId } = useWeb3React()
  
    return (
      <>
        <span>Chain Id</span>
        <span>{chainId ?? ''}</span>
      </>
    )
  }
  
function BlockNumber() {
  const { chainId, library } = useWeb3React()

  const [blockNumber, setBlockNumber] = React.useState()
  React.useEffect(() => {
    if (!!library) {
      let stale = false

      library
        .getBlockNumber()
        .then((blockNumber) => {
          if (!stale) {
            setBlockNumber(blockNumber)
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(null)
          }
        })

      const updateBlockNumber = (blockNumber) => {
        setBlockNumber(blockNumber)
      }
      library.on('block', updateBlockNumber)

      return () => {
        stale = true
        library.removeListener('block', updateBlockNumber)
        setBlockNumber(undefined)
      }
    }
  }, [library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span>Block Number</span>
      <span>{blockNumber === null ? 'Error' : blockNumber ?? ''}</span>
    </>
  )
}

function Account() {
  const { account } = useWeb3React()

  return (
    <>
      <span>Account</span>
      <span>
        {account === null
          ? '-'
          : account
          ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : ''}
      </span>
    </>
  )
}

function Balance() {
  const { account, library, chainId } = useWeb3React()

  const [balance, setBalance] = React.useState()
  React.useEffect(() => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => {
        stale = true
        setBalance(undefined)
      }
    }
  }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span>ETH Balance</span>
      <span>{balance === null ? 'Error' : balance ? `${formatEther(balance)}` : ''}</span>
      <span>NOM Balance</span>
      <span>{balance === null ? 'Error' : balance ? `${formatEther(balance)}` : ''}</span>
    </>
  )
}

const AcctHeader = styled.header`
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 1rem;
  height: 3rem;
  line-height: 3rem;
  background: ${props => props.theme.colors.headerBackground};
  text-align: center;
  vertical-align: middle;
  border-radius: ${borderRadius};
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ContentWrapper = styled.div`
  display: 'grid',
  gridGap: '1rem',
  gridTemplateColumns: '1fr 1fr',
  maxWidth: '20rem',
  lineHeight: '2rem',
  margin: 'auto'
`

export default function AcctDash() {
  const { active, error } = useWeb3React()

  return (
    <FlexWrapper>
      <Panel>
        <AcctHeader>
          Account
        </AcctHeader>
        <div
          style={{
            display: 'grid',
            gridGap: '1rem',
            gridTemplateColumns: '1fr 1fr',
            maxWidth: '20rem',
            lineHeight: '2rem',
            margin: 'auto'
          }}
        >
          <span>Connection</span> 
          <span>{active ? '🟢' : error ? '🔴' : '🟠'}</span>    
          <ChainId />
          <BlockNumber />
          <Account />
          <Balance />
        </div>
      </Panel>
      </FlexWrapper>
  )
}