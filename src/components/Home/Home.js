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

import React from 'react';
import { Box, Grid, Heading, Image, Text, Paragraph } from 'grommet';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import SubscribeForm from './SubscribeForm';
import styles from './styles';

const Home = () => (
    <Box>
        <style jsx global>
            {styles}
        </style>
        <Box pad="large" alignSelf="center" width="xlarge">
            <Heading margin={{ bottom: 'none' }}>
                Proving stuff on the Internet used to be hard. We make it
                simple.
            </Heading>
            <Heading color="brand">
                <Image
                    src="/static/img/logo.svg"
                    title="certish"
                    a11yTitle="certish"
                    className="logo"
                />
                &nbsp;is fixing trust on the Web.
            </Heading>
        </Box>
        <Box background="brand" align="center">
            <Box width="xlarge" pad="large">
                <Grid
                    fill
                    rows={['auto']}
                    columns={['auto', '150px']}
                    gap="large"
                    areas={[
                        { name: 'text', start: [0, 0], end: [0, 0] },
                        { name: 'icon', start: [1, 0], end: [1, 0] }
                    ]}
                >
                    <Paragraph gridArea="text" size="xlarge" fill>
                        The Web is a magical place full of fraud, forgeries, and
                        fake news. There&apos;s ways to investigate if something
                        you see is legitimate, but using standards to do it
                        right—to prove it—is usually complicated.
                    </Paragraph>
                    <Image
                        gridArea="icon"
                        src="/static/img/crime.svg"
                        a11yTitle="crime"
                        fit="contain"
                        fill
                    />
                </Grid>
            </Box>
        </Box>
        <Box background="dark-1" align="center">
            <Box width="xlarge" pad="large">
                <Grid
                    fill
                    rows={['auto']}
                    columns={['150px', 'auto']}
                    gap="large"
                    areas={[
                        { name: 'icon', start: [0, 0], end: [0, 0] },
                        { name: 'text', start: [1, 0], end: [1, 0] }
                    ]}
                >
                    <Image
                        gridArea="icon"
                        src="/static/img/badge.svg"
                        a11yTitle="badge"
                        fit="contain"
                        fill
                    />
                    <Paragraph
                        gridArea="text"
                        size="xlarge"
                        textAlign="end"
                        fill
                    >
                        certish uses bank- and military-grade cryptography to
                        prove where something comes from or whether its been
                        changed by somebody. We make it as easy as clicking a
                        link or dropping a file onto your browser, so you can
                        have more confidence in what you see and what you share.
                    </Paragraph>
                </Grid>
            </Box>
        </Box>
        <Box pad="large" alignSelf="center" width="xlarge">
            <Box margin={{ bottom: 'medium' }}>
                <Text
                    size="xlarge"
                    margin={{ right: 'small' }}
                    textAlign="center"
                >
                    Want to see how we&apos;re fixing trust on the web?
                </Text>
            </Box>
            <Box alignSelf="center" width="medium">
                <MailchimpSubscribe
                    url="https://certi.us4.list-manage.com/subscribe/post?u=0a73482fc09245110d3e219df&id=b73a88db49"
                    render={({ subscribe, status, message }) => (
                        <SubscribeForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />
            </Box>
        </Box>
    </Box>
);

export default Home;
