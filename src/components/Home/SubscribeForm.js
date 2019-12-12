/*
 * certish
 * Copyright © 2019 certish
 *
 * certish is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * certish is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with certish. If not, see <https://www.gnu.org/licenses/>.
 */

import React, { useState } from 'react';
import { string, func } from 'prop-types';
import { Box, Text, TextInput, Button } from 'grommet';

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SubscribeForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);

    const handleChange = event => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setEmailIsValid(Boolean(newEmail && emailRegex.test(newEmail)));
    };

    const handleSubmit = event => {
        if (event) event.preventDefault();
        return emailIsValid
            ? onValidated({
                  EMAIL: email
              })
            : null;
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box margin={{ bottom: 'small' }}>
                {status === 'sending' && <Text color="brand">Sending...</Text>}
                {status === 'error' && (
                    <Text
                        color="brand"
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
                {status === 'success' && (
                    <Text
                        color="green"
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
            </Box>
            <Box
                style={{
                    position: 'absolute',
                    left: '-9999px'
                }}
                aria-hidden="true"
            >
                <TextInput type="email" name="email" tabIndex="-1" value="" />
            </Box>
            <Box>
                <TextInput
                    placeholder="Email address"
                    type="email"
                    value={email}
                    onChange={handleChange}
                />
                <br />
                <Button
                    primary
                    label="Get Notified"
                    type="submit"
                    disabled={!emailIsValid}
                    onClick={handleSubmit}
                />
            </Box>
        </form>
    );
};

SubscribeForm.propTypes = {
    status: string,
    message: string,
    onValidated: func.isRequired
};

SubscribeForm.defaultProps = {
    status: null,
    message: null
};

export default SubscribeForm;
