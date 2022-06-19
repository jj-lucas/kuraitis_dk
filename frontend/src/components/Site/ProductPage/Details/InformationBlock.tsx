import classNames from 'classnames'
import React, { ReactNode, useRef, useState } from 'react'
import styled from 'styled-components'

const Tab: React.FC<{ name: string; activeTab: string; onClick: (name: string) => void; children: ReactNode }> = ({
	name,
	onClick,
	activeTab,
	children,
}) => (
	<li className={classNames({ active: name === activeTab })} onClick={() => onClick(name)}>
		{children}
	</li>
)

const StyledInformationBlock = styled.div`
	.topic-selector {
		display: flex;
		margin: ${p => p.theme.spacing.lg} 0 0;
		padding: 0;

		list-style: none;

		li {
			margin-right: 1rem;
			padding-right: 1rem;
			border-right: 1px solid gray;

			font-size: ${p => p.theme.typography.fs.h4};
			cursor: pointer;

			&.active {
				font-weight: bold;
			}

			&:last-of-type {
				border-right: none;
			}
		}
	}

	&.locked {
		// background: #cab8b8;
	}
`
const InformationBlock: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null)
	const [activeTab, setActiveTab] = useState('details')

	const onClickTab = (e: any) => {
		const infoBlock = ref.current
		if (infoBlock) {
			if (!infoBlock.classList.contains('locked')) {
				infoBlock.style.minHeight = `${infoBlock.getBoundingClientRect().height}px`
				infoBlock.classList.add('locked')
			}
		}
		setActiveTab(e)
	}

	const getContent = () => {
		switch (activeTab) {
			case 'sizing':
				return <p>Sizing</p>
			case 'shipping':
				return (
					<p>
						<li>Lorem ipsum dolor sit amet</li>
						<li>Lorem ipsum dolor sit amet</li>
						<li>Lorem ipsum dolor sit amet</li>
						<li>Lorem ipsum dolor sit amet</li>
						<li>Lorem ipsum dolor sit amet</li>
						<li>Lorem ipsum dolor sit amet</li>
					</p>
				)
			case 'details':
			default:
				return (
					<>
						<ul>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Lorem ipsum dolor sit amet</li>
						</ul>

						<a href="#">Read more</a>
					</>
				)
		}
	}

	return (
		<StyledInformationBlock ref={ref}>
			<ul className="topic-selector">
				<Tab name="details" onClick={onClickTab} activeTab={activeTab}>
					Details
				</Tab>
				<Tab name="sizing" onClick={onClickTab} activeTab={activeTab}>
					Sizing
				</Tab>
				<Tab name="shipping" onClick={onClickTab} activeTab={activeTab}>
					Shipping & returns
				</Tab>
			</ul>
			<div>{getContent()}</div>
		</StyledInformationBlock>
	)
}

export { InformationBlock }
