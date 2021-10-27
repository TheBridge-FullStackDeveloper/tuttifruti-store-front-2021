import { Box, Flex, Center } from "@chakra-ui/react"

import MiniCard from "components/Minicard";


export default function Featured({ items }) {
	return (
		<Box
			textAlign="center"
			minW={40}
			minH={30}
			py={20}
			borderColor="black" borderWidth={6}
			backgroundColor="purple.300" textColor="white" fontWeight="bold">
			<Flex d="flex" justify="center" align="center">
				{items.length ?
					(items.map((item, i) => {
						return (
							<Center>
								<MiniCard key={i} {...item} />
							</Center>
						)

					})) :
					(<h4>Loading...</h4>)}
			</Flex>
		</Box>
	)
}