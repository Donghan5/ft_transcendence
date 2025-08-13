#!/bin/bash

# --- Auto-detect the local IP address ---
# For macOS
if [[ "$OSTYPE" == "darwin"* ]]; then
    # Find the active network interface (like Wi-Fi or Ethernet)
    INTERFACE=$(route get default | grep interface | awk '{print $2}')
    export LOCAL_IP=$(ifconfig $INTERFACE | grep "inet " | awk '{print $2}')
# For Linux
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Get the IP address used for the default route
    export LOCAL_IP=$(ip route get 1 | awk '{print $7; exit}')
# For Windows (using Git Bash or WSL)
elif [[ "$OSTYPE" == "cygwin"* ]] || [[ "$OSTYPE" == "msys"* ]] || [[ "$OSTYPE" == "win32"* ]]; then
    # This command is for PowerShell, so we run it from Bash
    export LOCAL_IP=$(powershell.exe -Command "(Get-NetIPAddress -AddressFamily IPv4 -InterfaceAlias Wi-Fi* | Where-Object { $_.SuffixOrigin -ne 'Link' }).IPAddress" | tr -d '\r')
    # Fallback for Ethernet if Wi-Fi isn't found
    if [ -z "$LOCAL_IP" ]; then
        export LOCAL_IP=$(powershell.exe -Command "(Get-NetIPAddress -AddressFamily IPv4 -InterfaceAlias Ethernet* | Where-Object { $_.SuffixOrigin -ne 'Link' }).IPAddress" | tr -d '\r')
    fi
fi

# Check if we successfully found an IP
if [ -z "$LOCAL_IP" ]; then
    echo "ERROR: Could not automatically detect your local IP address."
    echo "Please set it manually: export LOCAL_IP=your.ip.address"
    exit 1
fi

echo "================================================================="
echo "  Starting Transcendence with Local IP: ${LOCAL_IP}"
echo "  Your development domain is: transcendence.${LOCAL_IP}.nip.io"
echo "  Access the application at: https://transcendence.${LOCAL_IP}.nip.io:8443"
echo "================================================================="

# Pass the IP to Docker Compose and start the services
# The --build flag ensures Nginx gets the new cert if the IP changes
docker-compose up --build
