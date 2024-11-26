import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card.tsx';


function ContentContainer() {
    return (
        <div className={"content-wrapper"}>
            <Content title={"fabricrealtimelab"}
                     description={"Microsoft Fabric real-time lab ko-kr"}
                     content={""}
                     footer={""}
            />
        </div>
    );
}

interface CardProps {
    title: string;
    description: string;
    content: string;
    footer: string;
}
function Content(props: CardProps) {
    const {title, description, content, footer} = props;
    return (
        <Card className={"size-80"}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{content}</p>
            </CardContent>
            <CardFooter>
                <p>{footer}</p>
            </CardFooter>
        </Card>
    );
}
export default ContentContainer;
