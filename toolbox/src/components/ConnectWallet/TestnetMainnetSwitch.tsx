import { avalanche, avalancheFuji } from "viem/chains"
import { useWalletStore } from "../../stores/walletStore";

import { Button } from "../../../@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../@/components/ui/dropdown-menu"

export const TestnetMainnetSwitch = () => {
    const coreWalletClient = useWalletStore(state => state.coreWalletClient);
    const isTestnet = useWalletStore(state => state.isTestnet);

    const handleSwitchToTestnet = () => {
        coreWalletClient.switchChain({ id: avalancheFuji.id })
    }

    const handleSwitchToMainnet = () => {
        coreWalletClient.switchChain({ id: avalanche.id })
    }


    return (<DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="h-12 px-3 bg-transparent">
            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${isTestnet ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
            {isTestnet ? "Testnet" : "Mainnet"}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
            <DropdownMenuItem onClick={handleSwitchToTestnet}>Testnet</DropdownMenuItem>
            <DropdownMenuItem onClick={handleSwitchToMainnet}>Mainnet</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>);
}