                var cArr = ['1', '*', '4', '-', '12', '/', '2'] ;
                //1*4-12/2
                //Handle Multiply
                for (i = 0; i <= self.cArr.length; i++) {
                    cItem = self.cArr[ i ];
                    if (cItem == '*') {
                        tLeft = parseFloat(self.cArr[ i - 1 ]);
                        tRight = parseFloat(self.cArr[ i + 1 ]);

                        nVal = tLeft * tRight;
                        self.cArr[ i - 1 ] = nVal;
                        self.cArr.splice(i, 2);
                        i = self.cArr.length;
                    }
                }

                //Handle Divide
                for (i = 0; i <= self.cArr.length; i++) {
                    cItem = self.cArr[ i ];
                    if (cItem == '/') {
                        tLeft = parseFloat(self.cArr[ i - 1 ]);
                        tRight = parseFloat(self.cArr[ i + 1 ]);

                        nVal = tLeft / tRight;
                        self.cArr[ i - 1 ] = nVal;
                        self.cArr.splice(i, 2);
                        i = self.cArr.length;
                    }
                }

                //Handle Plus and Minus
                var tResult = parseFloat(self.cArr[ 0 ]);
                for (i = 1; i < self.cArr.length; i++) {
                    if (self.cArr[ i ] == '+') {
                        tResult = tResult + parseFloat(self.cArr[ i + 1 ]);
                    } else if (self.cArr[ i ] == '-') {
                        tResult = tResult - parseFloat(self.cArr[ i + 1 ]);
                    }
                    i++;
                }
