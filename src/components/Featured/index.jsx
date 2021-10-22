import { Box } from "@chakra-ui/react"

export default function Featured(){

	return (
		<Box textAlign="center" minW={40} py={20} minH={50} borderColor="gray.400" borderWidth={6}
		backgroundColor="purple.300" textColor="white" fontWeight="bold"
		fontFamily="heading">
			Featured products will be shown here
		</Box>
	)
}