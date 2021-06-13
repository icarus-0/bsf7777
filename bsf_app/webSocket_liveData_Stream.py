from websocket import create_connection
ws = create_connection("ws://148.251.21.118:5570 ")
ws.send('{"method": "recentbuytrades"}')
print('started')
while True:
  result =  ws.recv()
  print(result)
  print('\n\n')

ws.close()