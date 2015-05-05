# fit-app

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Expected API

http://simplehelps.com/token

headers: {
			'Content-Type': undefined,
			'j_username' : 'timmons@unc.edu',
			'j_password' : 'stripes88'
		}

http://simplehelps.com/register

data: { username: 'test',
		password: 'password',
		firstName: 'tester',
		lastName: 'testing',
		email: 'eat@joes.com' }

http://simplehelps.com/getSummaryFitnessData

headers: {
   'Content-Type': undefined,
   'x-fit-token' : token
}
data: { 
	startDate: '01/01/01',
	endDate: '05/30/15'
}

http://simplehelps.com/getDayFitnessData

headers: {
   'Content-Type': undefined,
   'x-fit-token' : token
}
data: { 
	date: '05/04/15'
}