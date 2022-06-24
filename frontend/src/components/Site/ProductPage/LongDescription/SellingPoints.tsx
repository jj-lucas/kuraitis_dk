import React from 'react'
import styled from 'styled-components'
import { MdCached as ReturnIcon, MdPinDrop as TrackIcon } from 'react-icons/md'
import { FiTruck as DeliveryIcon } from 'react-icons/fi'
import { ImGift as GiftIcon } from 'react-icons/im'

const StyledSellingPoints = styled.div`
	display: inline-flex;
	flex-direction: column;
	text-align: left;

	> div {
		display: flex;
		margin: 2rem 0 0;

		& > * {
			align-self: center;
		}
	}

	svg {
		margin-right: 1rem;
	}
`

const SellingPoints: React.FC = () => (
	<StyledSellingPoints>
		<div>
			<DeliveryIcon size={25} />
			<span>1-3 days until your order is made and shipped.</span>
		</div>
		<div>
			<GiftIcon size={25} />
			<span>All items are shipped in gift packaging.</span>
		</div>
		<div>
			<ReturnIcon size={25} />
			<span>
				Free cancellations prior to shipping. <br />
				30 days return right for non-customized products.
			</span>
		</div>
	</StyledSellingPoints>
)

export default SellingPoints
