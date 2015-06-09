//Third original option
        case "MOVE ON":
            display.insertAdjacentHTML('beforeend', "<br>" + "You walk away from the forest and emerge after a while onto some plains. The grass is tall and golden, and sways in the wind. Under their rustling you can hear running water. The path continues until it reaches a bridge. Do you GO TO THE BRIDGE, or GO OFF THE PATH?");
            break;
            //first option for third branch
            case "GO TO THE BRIDGE":
                display.insertAdjacentHTML('beforeend', "<br>" + "You have to cross the bridge to get to the other side of the river, as the river is really wide, but the bridge is very delicate and you find that it is  really broken and worn out so you have to be very careful but you see some shelter on the other side. You are really hot from the sun, and the shade looks really nice. Do you ATTEMPT CROSSING THE BRIDGE, GO OFF THE PATH, or give up and KILL YOURSELF?");
                break;
        //
        		case "ATTEMPT CROSSING THE BRIDGE":
                    display.insertAdjacentHTML('beforeend', "<br>" + "");
                	break;
        //
        		case "KILL YOURSELF":
                    display.insertAdjacentHTML('beforeend', "<br>" + "You grab a sharp rock from the path and you kill yourself. Game over. If you would like to play again, refresh the webpage.");
                	break;
            //second option for third branch
            case "GO OFF THE PATH":
                display.insertAdjacentHTML('beforeend', "<br>" + "");
                break;